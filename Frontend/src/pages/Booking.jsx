import React,{useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { TextInput,DateRangePicker, RadioInput } from '@/components/customComponent/index.js'
import { Button } from '@/components/ui/button';
import { getVehicleData, bookingVehicle } from '../services/booking.service.js';
import { BookingModel } from '@/constants/booking.model.js';
import { useToast } from "@/components/ui/use-toast"


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

  const nextStep = () => {
    setStep(step + 1);
  };
  const onSubmit = async (data)=>{

    const bookingDetails = new BookingModel;
    bookingDetails.vechile_record_id = parseInt(data.specificModel);
    bookingDetails.start_time = startDate;
    bookingDetails.end_time = endDate;
    bookingDetails.first_name = data.firstName;
    bookingDetails.last_name = data.lastName;

    const submitBooking = await bookingVehicle(bookingDetails);
    if(submitBooking.success === true){
      toast({
        title: "Booking Successful",
        description: "Your booking has been successfully submitted",
        variant: "outline",
      })
    }else{
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  const getData = async() =>{
    console.log("get data");
    const response = await getVehicleData();
    console.log(response, "data vvvv")
    setVehicleData(response);
    wheelType = [...new Set(vehicleData.data.map(data => data.wheeler_type))];
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
            data.vechile_record.map((record) => {
              console.log(record, "record ssdsdsds")
              names.push({ id: record.id, name: record.name });
             });
          });

          setSpecificModels(names.map(record => ({ label: record.name, value: record.id })));
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