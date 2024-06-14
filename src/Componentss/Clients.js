// src/components/Clients.js
import React from 'react';
import './Clients.css';

const clients = [
  'Sampath Cream House',
  'AdClipse',
  'PJC Bridge',
  'ClickOrder',
  'TechMate'
];

const Clients = () => {
  return (
    <section className="clients">
      <h2>Meet the People We are Working With</h2>
      <div className="clients-list">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
