import React,{useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { TextInput,DateRangePicker, RadioInput } from '@/components/customComponent/index.js'
import { Button } from '@/components/ui/button';

const Booking = () => {
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [specificModels, setSpecificModels] = useState([]);

  const numberOfWheels = watch('numberOfWheels');
  const vehicleType = watch('vehicleType');

  const nextStep = () => {
    setStep(step + 1);
  };
  const onSubmit = (data)=>{
    console.log(data, "form Data")
    console.log(startDate, "start Date");
    console.log(endDate, "end Date");
  }

  useEffect(() => {
    if (numberOfWheels) {
      // Fetch vehicle types from the database based on number of wheels
      const fetchVehicleTypes = async () => {
        // Mock data fetching
        const types = numberOfWheels === '2' ? ['Bike', 'Scooter'] : ['Car', 'Truck'];
        setVehicleTypes(types.map(type => ({ label: type, value: type })));
      };

      fetchVehicleTypes();
    }
  }, [numberOfWheels]);



  useEffect(() => {
    if (vehicleType) {
      // Fetch specific models from the database based on vehicle type
      const fetchSpecificModels = async () => {
        // Mock data fetching
        const models = vehicleType === 'Bike' ? ['Model A', 'Model B'] : vehicleType === 'Scooter' ? ['Model C', 'Model D'] : vehicleType === 'Car' ? ['Model E', 'Model F'] : ['Model G', 'Model H'];
        setSpecificModels(models.map(model => ({ label: model, value: model })));
      };

      fetchSpecificModels();
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
              { label: '2', value: '2' },
              { label: '4', value: '4' },
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