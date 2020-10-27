// Destructuring with Annotations
const forecast1 = {
  date: new Date(),
  weather: "sunny",
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
const logWeather1 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather1(forecast);

// -------------------------

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring objects
// profile should be an object with an age property (ignoring other properties)
const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
