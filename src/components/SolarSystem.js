import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div id="container-planets" data-testid="solar-system">
        <Title headline="Planetas" />
        <div id="planetas-div-container">
          {
            planets.map(({ name, image }) => (<PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />))
          }
        </div>
      </div>
    );
  }
}
export default SolarSystem;
