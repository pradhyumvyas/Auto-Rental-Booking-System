import React,{useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { TextInput,DateRangePicker, RadioInput } from '@/components/customComponent/index.js'
import { Button } from '@/components/ui/button';
import { getVehicleData } from '../services/booking.service.js';

const Booking = () => {
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const [step, setStep] = useState(1);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [specificModels, setSpecificModels] = useState([]);

  const [vehicleData, setVehicleData] = useState([]);

  const numberOfWheels = watch('numberOfWheels');
  const vehicleType = watch('vehicleType');

  let wheelType = [];
  let typesOfVehicle = [];
  let specificModel = [];

  const nextStep = () => {
    setStep(step + 1);
  };
  const onSubmit = (data)=>{
    console.log(data, "form Data")
    console.log(startDate, "start Date");
    console.log(endDate, "end Date");
  }

  const getData = async() =>{
    console.log("get data");
    const response = await getVehicleData();
    // const data = await response.json();
    console.log(response, "data vvvv")
    setVehicleData(response);
    wheelType = [...new Set(vehicleData.data.map(data => data.wheeler_type))];
  }

  const extractData =()=>{
    // let wheelType = 

    // const typesOfVehicle = vehicleData.map((data) => data.typesOfVehicle);
    // const specificModel = vehicleData.map((data) => data.specificModel);

  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (numberOfWheels) {

      const secondaryTypes = [...new Set(vehicleData.data
        .filter(data => data.wheeler_type === numberOfWheels)
        .map(data => data.secondary_vehicle_type))];
      console.log(secondaryTypes, "secondaryTypes")
        setVehicleTypes(secondaryTypes.map(type => ({ label: type, value: type })));
    }
  }, [numberOfWheels]);



  useEffect(() => {
    if (vehicleType) {
      const names = [];
      vehicleData.data
          .filter(data => data.wheeler_type === numberOfWheels && data.secondary_vehicle_type === vehicleType)
          .forEach(data => {
              names.push(...data.vechile_record.map(record => record.name));
          });

          setSpecificModels(names.map(name => ({ label: name, value: name })));
    }
  }, [vehicleType]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white text-gray-900 p-10 rounded-lg shadow-2xl w-full max-w-3xl">
        {step === 1 && (
          <div>
            <TextInput label="First Name" name="firstName" register={register} required />
            <TextInput label="Last Name" name="lastName" register={register} required />
          </div>
        )}
        {step === 2 && (
          <RadioInput
            label="Number of Wheels"
            name="numberOfWheels"
            options={[
              { label: '2', value: 'TWO' },
              { label: '4', value: 'FOUR' },
            ]}
            register={register}
            required
          />
        )}
        {step === 3 && numberOfWheels && (
          <RadioInput
            label="Type of Vehicle"
            name="vehicleType"
            options={vehicleTypes}
            register={register}
            required
          />
        )}
        {step === 4 && vehicleType && (
          <RadioInput
            label="Specific Model"
            name="specificModel"
            options={specificModels}
            register={register}
            required
          />
        )}
        {step === 5 && (
          <DateRangePicker
            name="dateRange"
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        )}
        <div className="flex justify-between mt-8">
          {step < 5 && (
            <Button
              type="button"
              onClick={nextStep}
              variant="secondary"
            >
              Next
            </Button>
          )}
          {step === 5 && (
            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              variant="primary"
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default Booking