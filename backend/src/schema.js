module.exports = {
  $schema: "http://json-schema.org/draft-07/schema",
  type: "array",
  title: "Temperature file schema",
  description: "The JSON schema of uploaded temperature files.",
  examples: [
    [
      {
        city: "Helsinki",
        lat: "60.1676",
        lon: "24.9421",
        temp: "7.0",
      },
    ],
  ],
  items: {
    $id: "#/items/cityTemperature",
    type: "object",
    title: "City temperature",
    description: "Temperature and location of a city.",
    examples: [
      {
        city: "Helsinki",
        lat: "60.1676",
        lon: "24.9421",
        temp: "7.0",
      },
    ],
    required: ["city", "lat", "lon", "temp"],
    properties: {
      city: {
        $id: "#/items/cityTemperature/properties/city",
        type: "string",
        title: "The name of the city",
        examples: ["Helsinki"],
      },
      lat: {
        $id: "#/items/cityTemperature/properties/lat",
        type: "string",
        title: "The latitude of the city",
        examples: ["60.1676"],
      },
      lon: {
        $id: "#/items/cityTemperature/properties/lon",
        type: "string",
        title: "The longitude of the city",
        examples: ["24.9421"],
      },
      temp: {
        $id: "#/items/cityTemperature/properties/temp",
        type: "string",
        title: "The temperature of the city in Celsius",
        examples: ["7.0"],
      },
    },
  },
};
