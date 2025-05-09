import React from 'react';
import {
    Card,
    CardProps
} from '@mui/material';

interface ICardLinedHeaderBaseProps {
    titleText: JSX.Element | string;
    titleComponents?: React.ReactNode;
}

import styles from './CardLinedHeader.module.scss';

type ICardLinedHeaderProps = ICardLinedHeaderBaseProps & CardProps;

export class CardLinedHeader extends React.Component<ICardLinedHeaderProps> {
    render() {
        const {
            titleText, 
            titleComponents,
            ...passThroughProps
        } = this.props;

        return (
            <Card className={styles.mainContainer} {...passThroughProps}>
                <div className={styles.header}>
                    {titleText}
                    {titleComponents}
                </div>
                {this.props.children}
            </Card>
        );
    }
}
export default CardLinedHeader;