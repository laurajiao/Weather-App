import React from 'react';
import WeatherDetails from '../../src/components/WeatherDetails';

describe('<WeatherDetails />', () => {
  it('displays weather details correctly', () => {
  
    const mockWeatherData = {
      location: {
        name: 'Sydney',
        localtime: '2024-10-03 12:00',
      },
      current: {
        condition: { text: 'Clear' },
        temp_c: 25,
        temp_f: 77,
        humidity: 60,
        wind_kph: 15,
        pressure_in: 29.92,
      },
      forecast: {
        forecastday: [
          {
            day: {
              mintemp_c: 15,
              maxtemp_c: 25,
            },
          },
        ],
      },
    };

    cy.mount(<WeatherDetails weatherData={mockWeatherData} />);

 
    cy.contains('Sydney').should('be.visible');

   
    cy.contains('03-10-2024 Thursday 12:00').should('be.visible');

 
    cy.contains('25°C').should('be.visible');

  
    cy.contains('15~25°C').should('be.visible');

  
    cy.get('img[alt="humidity"]').should('be.visible');
    cy.contains('60%').should('be.visible');

   
    cy.get('img[alt="wind speed"]').should('be.visible');
    cy.contains('15 km/h').should('be.visible');

 
    cy.get('img[alt="pm2.5"]').should('be.visible');
    cy.contains('29.92 ug').should('be.visible');

    cy.get('img[alt="temperature"]').should('be.visible');
    cy.contains('77°F').should('be.visible');
  });
});
