import React from 'react';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { RadioButton } from './components/RadioButton/RadioButton';
import { TableHeader } from './components/Table/TableHeader';
import { TableRow } from './components/Table/TableRow';
import { TableCell } from './components/Table/TableCell';
import { TableFooter } from './components/Table/TableFooter';
import { HeroImage } from './components/HeroImage/HeroImage';
import { Label } from './components/Label/Label';
import { Text } from './components/Text/Text';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Img } from './components/Img/Img';

function App() {
  const dropdownOptions = [
    { label: 'Option 1: React', value: '1' },
    { label: 'Option 2: TypeScript', value: '2' },
    { label: 'Option 3: Docker', value: '3' },
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1>UI Component Garden</h1>
      <hr style={{ margin: '20px 0' }} />

      <section style={{ marginBottom: '30px' }}>
        <h2>Hero Image & Img</h2>
        <HeroImage 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80" 
          alt="Banner" 
          title="Navjot's Component Garden" 
          subtitle="All components fully implemented"
        />
        <div style={{ marginTop: '15px', maxWidth: '300px' }}>
          <Label text="Standard Image Component:" />
          <Img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" alt="Tech" height="150px" />
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Typography & Labels</h2>
        <Label text="Form Field Label" />
        <Text content="This is body text explaining the component details." variant="body" />
        <Text content="This is a smaller caption text." variant="caption" />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Button States (Enabled vs Disabled)</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div>
            <Label text="Enabled Button:" />
            <br /><br />
            <Button text="Click Me" onClick={() => alert("Button clicked!")} />
          </div>
          <div>
            <Label text="Disabled Button:" />
            <br /><br />
            <Button text="Disabled" disabled={true} />
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Dropdown States (Enabled vs Disabled)</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div>
            <Label text="Enabled Dropdown:" />
            <br /><br />
            <Dropdown options={dropdownOptions} onChange={(e) => alert(`Selected: ${e.target.value}`)} />
          </div>
          <div>
            <Label text="Disabled Dropdown:" />
            <br /><br />
            <Dropdown options={dropdownOptions} disabled={true} />
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Radio Button States (Enabled vs Disabled)</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <RadioButton label="Active Choice (Enabled)" name="options" value="1" defaultChecked={true} />
          <RadioButton label="Disabled Choice" name="options" value="2" disabled={true} />
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Modular Table Component</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>ID</TableCell>
              <TableCell isHeader>Component</TableCell>
              <TableCell isHeader>Status</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Button & Card</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Table & Dropdown</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>All Components</TableCell>
              <TableCell>Verified</TableCell>
            </TableRow>
          </TableFooter>
        </table>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Card Container</h2>
        <Card title="Interactive Card">
          <Text content="This card wraps child elements and custom components seamlessly." />
          <Button text="Card Action" onClick={() => alert("Card Button clicked!")} />
        </Card>
      </section>
    </div>
  );
}

export default App;
