import React from 'react';

export const lars = { Name: "Lars", Age: 20, ShoeSize: 46, Gender: "M", Children: [] };
export const iben = { Name: "Iben", Age: 26, ShoeSize: 38, Gender: "F", Children: [] };
export const bente = {
  Name: "Bente",
  Age: 46,
  ShoeSize: 37,
  Gender: "F",
  Children: [lars]
};
export const viggo = {
  Name: "Viggo",
  Age: 47,
  ShoeSize: 42,
  Gender: "M",
  Children: [iben]
};
export const henning = {
  Name: "Henning",
  Age: 65,
  ShoeSize: 44,
  Gender: "M",
  Children: [viggo, bente]
};


export const familyData = [lars, iben, bente, viggo, henning];
