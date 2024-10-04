import React from 'react';
import WeatherForecast from '../../src/components/WeatherForecast';
import dayjs from 'dayjs';

describe('<WeatherForecast />', () => {
  it('renders the weather forecast correctly', () => {
   
    const mockWeatherData = {
      forecast: {
        forecastday: [
          {
            date: dayjs().format('YYYY-MM-DD'), 
            day: {
              mintemp_c: 18,
              maxtemp_c: 26,
              condition: { text: 'Clear' }
            }
          },
          {
            date: dayjs().add(1, 'day').format('YYYY-MM-DD'), 
            day: {
              mintemp_c: 15,
              maxtemp_c: 25,
              condition: { text: 'Cloudy' }
            }
          },
          {
            date: dayjs().add(2, 'day').format('YYYY-MM-DD'), 
            day: {
              mintemp_c: 12,
              maxtemp_c: 22,
              condition: { text: 'Rain' }
            }
          },
          {
            date: dayjs().add(3, 'day').format('YYYY-MM-DD'), 
            day: {
              mintemp_c: 10,
              maxtemp_c: 20,
              condition: { text: 'Sunny' }
            }
          }
        ]
      }
    };

   
    cy.mount(<WeatherForecast weatherData={mockWeatherData} city="Sydney" />);


    cy.get('.forecast-day').should('have.length', 3);

   
    cy.get('.forecast-day').eq(0).within(() => {
      cy.contains('Cloudy').should('be.visible');
      cy.contains('15~25°C').should('be.visible');
    });

   
    cy.get('.forecast-day').eq(1).within(() => {
      cy.contains('Rain').should('be.visible');
      cy.contains('12~22°C').should('be.visible');
    });

   
    cy.get('.forecast-day').eq(2).within(() => {
      cy.contains('Sunny').should('be.visible');
      cy.contains('10~20°C').should('be.visible');
    });
  });
});


