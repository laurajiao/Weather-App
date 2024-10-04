import React from 'react';
import CityCards from '../../src/components/CityCard';
import * as weatherService from '../../src/services/weatherAPI'; // 确保路径正确

describe('<CityCards />', () => {
  it('renders city cards with mock weather data', () => {
    const mockSetSearchValue = cy.stub().as('setSearchValue');
    
   
    const mockWeatherData = [
      {
        location: { name: 'Sydney' },
        forecast: { forecastday: [{ day: { mintemp_c: 15, maxtemp_c: 25 } }] },
        current: { condition: { text: 'Clear' }, icon: 'sydney.png' }
      },
      {
        location: { name: 'Shanghai' },
        forecast: { forecastday: [{ day: { mintemp_c: 18, maxtemp_c: 28 } }] },
        current: { condition: { text: 'Cloudy' }, icon: 'shanghai.png' }
      },
      {
        location: { name: 'New York' },
        forecast: { forecastday: [{ day: { mintemp_c: 10, maxtemp_c: 15 } }] },
        current: { condition: { text: 'Rain' }, icon: 'newyork.png' }
      },
      {
        location: { name: 'London' },
        forecast: { forecastday: [{ day: { mintemp_c: 8, maxtemp_c: 12 } }] },
        current: { condition: { text: 'Fog' }, icon: 'london.png' }
      }
    ];


    cy.stub(weatherService, 'fetchWeather').callsFake((city) => {
      const cityData = mockWeatherData.find(data => data.location.name === city);
      return Promise.resolve(cityData);
    });

  
    cy.mount(<CityCards setSearchValue={mockSetSearchValue} />);

 
    cy.get('.weather-display').should('have.length', 4);

 
    cy.contains('Sydney').should('be.visible');
    cy.contains('Shanghai').should('be.visible');
    cy.contains('New York').should('be.visible');
    cy.contains('London').should('be.visible');

 
    cy.contains('15~25°C').should('be.visible');
    cy.contains('18~28°C').should('be.visible');
    cy.contains('10~15°C').should('be.visible');
    cy.contains('8~12°C').should('be.visible');

 
    cy.get('img[src="sydney.png"]').should('be.visible');
    cy.get('img[src="shanghai.png"]').should('be.visible');
    cy.get('img[src="newyork.png"]').should('be.visible');
    cy.get('img[src="london.png"]').should('be.visible');
  });
});