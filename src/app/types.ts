export interface Elevator {
  id: number;
  target: number;
  weight: number;
  maxWeight: number;
  status: Status;
  direction: string;
  position: number;
}

export interface Rule {
  name: string;
  title: string;
  isActive?: boolean;
}

export interface Option {
  name: string;
  title: string;
  options: number[];
}

export interface Passenger {
  currentFloor: number;
  targetFloor: number;
  weight: number;
}

export interface Floor {
  title: number;
}

export type Status = 'waiting' | 'starting' | 'moving';
