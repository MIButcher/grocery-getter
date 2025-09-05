import React, { useEffect, useState } from 'react';
import { Button, IconButton, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { StoreApi } from '@apis/StoreApi';
import { Store } from '@models/Store';
import { Layout } from '@models/Layout';
import { AisleApi } from '@apis/AisleApi';
import { Aisle } from '@models/Aisle';
import { Configuration } from '@generated/runtime';
import { ArrowDownwardIcon, ArrowUpwardIcon, EditIcon } from '@imports/MaterialUIIcons';
import { useToast } from '@context/toastContext';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const AislePage: React.FC = () => {
	const toast = useToast()
    const [storeId, setStoreId] = useState<number | undefined>(undefined);
    const [stores, setStores] = useState<Store[]>([]);
    const [layout, setLayout] = useState<Layout | undefined>(undefined);
    const [layouts, setLayouts] = useState<Layout[]>([]);
    const [storeLayouts, setStoreLayouts] = useState<Layout[]>([]);
	const [aisles, setAisles] = useState<Aisle[]>([]);
    const [layoutAisles, setLayoutAisles] = useState<Aisle[]>([]);
	const navigate = useNavigate();

    useEffect(() => {
        const fetchStoreLayoutAisleData = async () => {
            try {
                const storeApi = new StoreApi(new Configuration({ basePath: API_BASE_PATH }));
                const response = await storeApi.getStoreLayoutAisleData({ isActiveLayout: false });

                const fetchedStores = response.stores ?? [];
                const fetchedLayouts = response.layouts ?? [];
                const fetchedAisles = response.aisles ?? [];

                setStores(fetchedStores);
                setLayouts(fetchedLayouts);
                setAisles(fetchedAisles);

                // Load from localStorage
                const storedStoreId = parseInt(localStorage.getItem('selectedStoreId') ?? '', 10);
                const storedLayoutId = parseInt(localStorage.getItem('selectedLayoutId') ?? '', 10);

                if (storedStoreId) {
                    setStoreId(storedStoreId);
                    const filteredLayouts = fetchedLayouts.filter(l => l.storeId === storedStoreId);
                    setStoreLayouts(filteredLayouts);

                    const selectedLayout = filteredLayouts.find(l => l.id === storedLayoutId)
                        ?? filteredLayouts.find(l => l.isActive)
                        ?? filteredLayouts[0];

                    if (selectedLayout) {
                        setLayout(selectedLayout);
                        const layoutAisles = fetchedAisles
                            .filter(a => a.layoutId === selectedLayout.id)
                            .sort((a, b) => (a.lineup ?? Infinity) - (b.lineup ?? Infinity));
                        setLayoutAisles(layoutAisles);
                    }
                }
            } catch (error: any) {
                console.error('Error fetching store layout aisle data:', error);
                const errorMessage =
                    error.response?.data?.message || 'Failed to fetch store layout aisle data. Please check your network connection or server status.';
                toast(errorMessage, 'error');
            }
        };

        fetchStoreLayoutAisleData();
    }, []);

    // Persist selection to localStorage
    const onStoreChange = (value: number) => {
        localStorage.setItem('selectedStoreId', value.toString());
        setStoreId(value);

        const filteredLayouts = layouts.filter(l => l.storeId === value);
        setStoreLayouts(filteredLayouts);

        const defaultLayout = filteredLayouts.find(l => l.isActive) ?? filteredLayouts[0];
        if (defaultLayout.id) {
            onLayoutChange(defaultLayout.id);
        }
    };

    const onLayoutChange = (value: number) => {
        localStorage.setItem('selectedLayoutId', value.toString());
        const selectedLayout = layouts.find(l => l.id === value);
        if (selectedLayout) {
            setLayout(selectedLayout);
            const layoutAisles = aisles
                .filter(a => a.layoutId === selectedLayout.id)
                .sort((a, b) => (a.lineup ?? Infinity) - (b.lineup ?? Infinity));
            setLayoutAisles(layoutAisles);
        }
    };

	const handleAddNewAisle = () => {
		navigate('/admin/aisle/details', { state: { aisle: { id: 0, layoutId: layout?.id, layout } } });
	};

	const handleMove = async (aisle: Aisle, lineupChange: number) => {
		try {
			if (aisle.lineup) {
				aisle.lineup = aisle.lineup + lineupChange;
				setAisleLayout(aisle);
				const aisleApi = new AisleApi(
					new Configuration({ basePath: API_BASE_PATH })
				);
				const updatedAisles = await aisleApi.saveAisle({aisle});
				setLayoutAisles(updatedAisles);
			}
		} catch (error) {
			console.error('Failed to save aisle:', error);
			toast('Failed to save aisle. Please try again.', 'error');
		}
	};

	const setAisleLayout = async (aisle: Aisle) => {
		aisle.layout = layout?.id === aisle.layoutId ? layout : layouts.find(layout => layout.id === aisle.layoutId);
	}

	const columns: GridColDef[] = [
		{
			field: 'moveUp', 
			headerName: '',
			width: 50,
			disableColumnMenu: true,
			sortable: false,
			renderCell: (params) => (
				<IconButton
					onClick={() => handleMove(params.row, -1)}
					style={{ color: 'var(--text-primary)', paddingBottom: '1rem' }}
					disabled={params.row.lineup === 0}
					>
					<ArrowUpwardIcon />
				</IconButton>
			),
		},
		{ field: 'lineup', headerName: 'Lineup', width: 55, sortable: false, disableColumnMenu: true },
		{ field: 'name', headerName: 'Name', flex: 1, sortable: false, disableColumnMenu: true, 
			renderCell: (params) => {
				setAisleLayout(params.row)
				return (
				<span
				onClick={() => navigate(`/admin/aisle/details`, { state: { aisle: params.row } })}
				style={{
					cursor: 'pointer',
					textDecoration: 'underline',
					color: 'var(--text-primary)',
				}}
				>
				{params.value}
				</span>
			)}
		},
		{
			field: 'moveDown',
			headerName: '',
			width: 50,
			disableColumnMenu: true,
			renderCell: (params) => (
				<IconButton
					onClick={() => handleMove(params.row, 1)}
					style={{ color: 'var(--text-primary)', border: 'none', cursor: 'pointer', paddingBottom: '1rem' }}
				>
					<ArrowDownwardIcon />
				</IconButton>
			),
		},
	];

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Aisles</div>
			<FormControl className={styles.dropDownMenu} fullWidth>
				<InputLabel id="store-select-label">Select Store</InputLabel>
				<Select
					labelId="store-select-label"
					value={storeId ?? ''}
					label="Select Store"
					displayEmpty
					onChange={(e: SelectChangeEvent<number>) => onStoreChange(e.target.value as number)}
				>
					{stores.map((store) => (
						<MenuItem key={store.id} value={store.id}>
							{store.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl className={styles.dropDownMenu} fullWidth>
				<InputLabel id="layout-select-label">Select Layout</InputLabel>
				<Select
					labelId="layout-select-label"
					value={layout?.id ?? ''}
					label="Select Layout"
					displayEmpty
					onChange={(e: SelectChangeEvent<number>) => onLayoutChange(e.target.value as number)}
    				style={{ color: layout?.isActive ? 'inherit' : 'hotpink' }}
				>
					{storeLayouts.map((layout) => (
						<MenuItem key={layout.id} value={layout.id}
    						style={{ color: layout?.isActive ? 'inherit' : 'hotpink' }}>
							{layout.isActive ? layout.name : layout.name + ' (inactive)'}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<div className={styles.gridContainer}>
				<DataGrid
					rows={layoutAisles}
					columns={columns}
  					sortModel={[{ field: 'lineup', sort: 'asc' }]}
					initialState={{
						pagination: {
							paginationModel: { pageSize: 50 },
						},
					}}
					pageSizeOptions={[25, 50, 100]}
				/>
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined" onClick={handleAddNewAisle} disabled={!storeId || !layout}>Add New Aisle</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default AislePage;
