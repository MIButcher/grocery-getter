Charting options:
A comparison of top charting options is provided here:
https://www.wearedevelopers.com/magazine/top-javascript-charting-libraries

This comparison focuses on D3, Chart.js, MUI Charts, and Google Charts:
Summary:  D3/C3 and Google Charts come with the most chart templates making a paid option difficult to choose.  PDFKit has a slight edge over jsPDF in that I found more wrappers for it.
D3:
https://d3js.org/
In the article provided above, D3 is the second most used library.  The library provides tools for creating charts of any kind and offers a great deal of customization and control.  The codebase is actively receiving updates.  Code examples are available to learn and copy from.
https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=hero&utm_campaign=try-observable
To reduce the complexity of using D3 there is another library built on top of it called C3:
https://c3js.org/
The C3 library is open source and free and still allows you to use D3.  They have a great demo on their site showing animation and live updates.  With the addition of C3 to D3 you get both the out of box ease of use and the greater degree of customization of D3.  One negative about C3 is that the last bugfix was in 2020.
Examples for C3 are here:
https://c3js.org/examples.html
C3 wrapper with typescript:
https://www.npmjs.com/package/@types/c3

Another library on top of D3 by the same makers that offers templates for charts:
https://observablehq.com/plot/
It’s also free but requires signing up.
Installation: 
yarn add d3

Pros:
1)	Offers the most customization possible.
2)	Can do more than just charts.
3)	We could make our own unique charting library.
4)	2nd most used library out there.
5)	Cost of customization goes down as THE COMPANY does more projects while still retaining the ability to customize when needed.
6)	It’s free.
Cons:
1)	Customization comes at the cost of a greater learning curve.
2)	Higher initial cost compared to other libraries that sacrifice customization to be more ready out of the box.  This could be remedied by considering C3.


Chart.js
https://www.chartjs.org/docs/latest/
In the article provided above, Chart.js is voted number 1 by developers for its ease of use.  
It’s also free and is open source.  It comes with animation like the other libraries listed here with the benefit of out of the box charts.
Installation:
npm install chart.js

The following charts are offered:
Area Chart
Bar Chart
Bubble Chart
Doughnut and Pie Charts
Line Chart
Mixed Chart Types
Polar Area Chart
Radar Chart
Scatter Chart

MUI Charts:
A list of chart features is listed in the link and copied below.
  https://mui.com/pricing/
The benefit of using this library is that if the project is already using MUI then a matching look and feel can be obtained by also using the charts offered by MUI.  A good number of charts is offered.
Installation:
yarn add @mui/x-charts
yarn add @mui/material @emotion/react @emotion/styled
Free community charts offered:
Line chart
Bar chart
Scatter chart
Pie chart
Sparkline
Gauge
Treemap (In Development)
Radar (In Development)

Additional Paid charts included for both Pro and Premium:
Heatmap
Funnel
Sankey
Gantt
Advanced Gantt (TBD)
Candlestick (TBD)
Large dataset with canvas (TBD)

Google Charts:
Google also does javascript charts and their list of charts is pretty comprehensive:
https://developers.google.com/chart
A link to their Chart Library:
https://developers.google.com/chart/interactive/docs/gallery
Their library offers charts that other free libraries don’t.  Please review this library before choosing a paid library that seems to offer unique charts.
List of charts listed on their site:
Annotation Charts
Area Charts
Bar Charts
Bubble Charts
Calendar Charts
Candlestick Charts
Column Charts
Diff Charts
Donut Charts
Gantt Charts
Gauge Charts
Geo Charts
Histograms
Intervals
Line Charts
Maps
Org Charts
Pie Charts
Sankey Diagrams
Scatter Charts
Stepped Area Charts
Table Charts
Timelines
Tree Map Charts
Trendlines
VegaChart
Waterfall Charts
Word Trees


A react wrapper exists for their charts here:
https://www.react-google-charts.com/
Examples:
https://www.react-google-charts.com/examples
To install:
yarn add react-google-charts

Paid options:

High charts:  They have a built-in save to pdf option.
https://shop.highcharts.com/
A perpetual license for the core library is 
$386 per seat.

AG Grid also sells charts:
https://charts.ag-grid.com/gallery/
They do offer a free community version which includes a subset of their charts.
I didn’t see an option to save to pdf in their demo chart:
https://charts.ag-grid.com/gallery/
Pricing:
https://charts.ag-grid.com/license-pricing/
Paid licensing is perpetual with 1 year of software updates and support.  A deployment license per production server is also needed when deploying.
They charge $500 per developer for charting, there is no bundle discount currently.  A week ago, they had a sale price of 200 or 300 off.

PDF options:
A comparison of pdf options:
https://dev.to/handdot/generate-a-pdf-in-js-summary-and-comparison-of-libraries-3k0p

Two main libraries exist that are about the same in terms of features, low level access, and popularity:
PDFKit
jsPDF
Both of these libraries have wrappers that make them easier to use.  PDFKit seems to have a slight advantage in that I found more wrappers for it than jsPDF so I recommend PDFKit.  jsPDF is still a good library and could be used as well.
PDFKit can be found here:
https://pdfkit.org/
To install:
npm install pdfkit

	This wrapper uses a declarative style instead of imperative and adds higher level features:
	http://pdfmake.org/#/
	https://github.com/bpampuch/pdfmake/tree/0.2

	PDF-Lib:
	This wrapper is in Typescript and has a list of features here:
	https://pdf-lib.js.org/
	According to the site, two of pdf-lib's distinguishing features are:
	Supporting modification (editing) of existing documents.
	Working in all JavaScript environments - not just in Node or the Browser.

		pdfMe:
		This wrapper is built on top of pdfLib and adds a React based template editor:
		https://pdfme.com/docs/getting-started

	This wrapper allows easier integration with React:
	https://www.npmjs.com/package/@react-pdf/renderer

jsPDF can be found here:
https://raw.githack.com/MrRio/jsPDF/master/docs/index.html
https://github.com/parallax/jsPDF

	This wrapper allows easier integration with React:
	https://www.npmjs.com/package/react-to-pdf?activeTab=readme

To display PDFs:
https://www.npmjs.com/package/react-pdf
repository:
https://github.com/wojtekmaj/react-pdf

Interesting libraries:
For diagrams and visualizations such as flow charts, class diagrams and sequence diagrams:
Mermaid.js:
https://mermaid.js.org/

Charts that have a hand drawn look and feel:
https://github.com/jwilber/roughViz
This library is free and has a unique look unlike the other libraries mentioned.
