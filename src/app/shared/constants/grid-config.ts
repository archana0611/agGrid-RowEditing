
export const iconHeaderTemplate =
  '<div class="ag-cell-label-container" role="presentation">' +
  '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
  '  <div ref="eLabel" class="ag-header-cell-label ag-grid-header-styles" role="presentation">' +
  '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
  '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
  '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
  '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
  '    <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
  '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
  '  </div>' +
  '</div>';

export const headerTemplateLeft20 =
  '<div class="ag-cell-label-container" role="presentation">' +
  '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
  '  <div ref="eLabel" class="ag-header-cell-label" style="margin-left: 20px" role="presentation">' +
  '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
  '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
  '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
  '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
  '    <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
  '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
  '  </div>' +
  '</div>';

function ragRenderer(params: any) {
  return '<span class="rag-element">' + params.value + '</span>';
}

export const rowClass = 'white-bg';

export const defaultColDef = {
  filter: true,
  SingleClickEdit: true,
  sortable: true,
  resizable: true,
};

export const defaultColDefModal = {
  minWidth: 150,
  filter: true,
  SingleClickEdit: true,
  sortable: true,
  resizable: true,
  filterParams: { newRowsAction: 'keep' },
};

export const defaultColDefDark = {
  minWidth: 100,
  filter: true,
  SingleClickEdit: true,
  sortable: true,
  resizable: true,
};

export const defaultColDefSub = {
  flex: 1,
  filter: true,
  SingleClickEdit: true,
  sortable: true,
  resizable: true,
};

export const columnDefs = [
  {
    field: 'client',
    minWidth:300,
   
    headerName: 'CLIENT',
  },
  {
    field: 'fund',
    headerName: 'Fund',
    minWidth:250,
    maxWidth:250,
    cellClass: 'align-left',
  },
  {
    field: 'entity_id',
    headerName: 'Entity ID / Account',
    cellClass: 'align-left',
    minWidth:140,
  },
  {
    field: 'name',
    headerName: 'Name',
    cellClass: 'align-left',
    minWidth:180,
    maxWidth:180

  },

  {
    field: 'email',
    headerName: 'Email',
    cellClass: 'align-left',
    minWidth:180,
    maxWidth:180

  },
  {
    field: 'contact_type',
    headerName: 'Contact Type',
    headerClass: 'align-left',
    minWidth:180,
    maxWidth:180
  },
  {
    field: 'status',
    headerName: 'Status',
    headerClass: 'align-left',
    minWidth:120,
    maxWidth:120
  },
  {
    field: 'actions',
    headerName: 'Actions',
    minWidth:120,
    maxWidth:120,

    
    headerClass: 'align-center justify-center',
    cellClass:'align-center justify-center',
    cellRenderer: 'iconCellRendererComponent',

    cellRendererParams: {
      label: 'anchor',
    },

  },

  // { field: 'expense_name', headerName: 'Expense Name' },
  // { field: 'message', headerName: 'Message' },
  // { field: 'outlier', headerName: 'Outlier' },
  // { field: 'severity', headerName: 'Severity' },
  // { field: 'status', headerName: 'Status' },
];

export const rowData = [
  {
    client: 'Brook',
    fund: 'Miracle Capital Offshore Fund...',
    entity_id: 'Harry Woodstock',
    name: 'Candice Ramirez',
    email: 'cramirez@gmail.com',
    contact_type: 'Authorized Signer',
    status: 'Pending',
  },

  {
    client: 'Clarenroad Capital Markets',
    fund: 'Offshore',
    entity_id: 'Harry Woodstock ',
    name: 'Rita Moreno',
    email: 'rmoreno@gmail.com',
    contact_type: 'Authorized Signer',
    status: 'Active',
  },
  {
    client: 'Miracle Capital Offshore Fund, Ltd',
    fund: 'Miracle Capital Offshore Fund...',
    entity_id: 'Harry Woodstock ',
    name: 'Sam Smith',
    email: 'ssmith@gmail.com',
    contact_type: 'Tax Advisor',
    status: 'Active',
  },
  {
    client: 'Miracle Capital Offshore Fund, Ltd',
    fund: 'Offshore',
    entity_id: 'Harry Woodstock ',
    name: 'Alex Pachecko',
    email: 'apachecko@gmail.com',
    contact_type: 'Contact Manager',
    status: 'Pending',
  },
  {
    client: 'Clarenroad Capital Markets',
    fund: 'Offshore',
    entity_id: 'Harry Woodstock ',
    name: 'Rachal Park',
    email: 'rpark@gmail.com',
    contact_type: 'Authorized Signer',
    status: 'Active',
  },
  
  
  {
    client: 'Clarenroad Capital Markets',
    fund: 'Offshore',
    entity_id: 'Harry Woodstock ',
    name: 'Willow Sanchez',
    email: 'wsanchez@gmail.com',
    contact_type: 'Interested Party',
    status: 'Active',
  },
    
  {
    client: 'Clarenroad Capital Markets',
    fund: 'Offshore',
    entity_id: 'Harry Woodstock ',
    name: 'Willow Sanchez',
    email: 'wsanchez@gmail.com',
    contact_type: 'Interested Party',
    status: 'Active',
  },
  
];

