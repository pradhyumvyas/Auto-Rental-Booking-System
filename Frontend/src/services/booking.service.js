export const getVehicleData = async() =>{

   console.log("`${impget-vehicle-data`", `${import.meta.env.VITE_BACKEND_URL}booking/get-vehicle-data`);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}booking/get-vehicle-data`);
      return response.json();
}


export const bookingVehicle = async(data) =>{
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}booking/book-vehicle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
}