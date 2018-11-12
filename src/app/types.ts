export interface Elevator {
  id: number,
  target: number,
  weight: number,
  maxWeight: number,
  status: string, // waiting, starting, moving, stopping
  direction: string,
  position: number
}

export interface Rule {
  name: string,
  title: string,
  isActive?: boolean
}

export interface Option {
  name: string,
  title: string
}

export interface Passenger {
  currentFloor: number,
  targetFloor: number,
  weight: number
}

export interface Floor {
  title: number
}
