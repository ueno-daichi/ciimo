export type Theater = {
    id:number,
    name: string,
    film: Film[],
}

export type Film = {
    id:number,
    name: string,
    schedule: Schedule[],
}

export type Schedule = {
    id:number,
    date: string,
    startTime: string,
    endTime: string,
    seat: Seat[],
}

export type Seat = {
    row: string,
    column: Column[],
}

export type Column = {
    seatName: string,
    reserved: string,
}