import React from 'react';

const TableComponent: React.FC = () => {
  const tableContainerStyle: React.CSSProperties = {
    margin: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse'
  };

  const thStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f37c98b7',
    textAlign: 'left'
  };

  const tdStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left'
  };

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Coluna 1</th>
            <th style={thStyle}>Coluna 2</th>
            <th style={thStyle}>Coluna 3</th>
            <th style={thStyle}>Coluna 4</th>
            <th style={thStyle}>Coluna 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Dados 1</td>
            <td style={tdStyle}>Dados 2</td>
            <td style={tdStyle}>Dados 3</td>
            <td style={tdStyle}>Dados 4</td>
            <td style={tdStyle}>Dados 5</td>
          </tr>
          <tr>
            <td style={tdStyle}>Dados 6</td>
            <td style={tdStyle}>Dados 7</td>
            <td style={tdStyle}>Dados 8</td>
            <td style={tdStyle}>Dados 9</td>
            <td style={tdStyle}>Dados 10</td>
          </tr>
          <tr>
            <td style={tdStyle}>Dados 11</td>
            <td style={tdStyle}>Dados 12</td>
            <td style={tdStyle}>Dados 13</td>
            <td style={tdStyle}>Dados 14</td>
            <td style={tdStyle}>Dados 15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Minha Tabela</h1>
      <TableComponent />
    </div>
  );
};

export default App;
