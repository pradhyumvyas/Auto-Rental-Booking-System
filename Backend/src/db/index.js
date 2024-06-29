import { PrismaClient }from '@prisma/client'

const prisma = new PrismaClient({
   log:["query"],
})

async function main() {
/*
  const vehicleOwners = await prisma.vechile_owner.createMany({
    data: [
      { name: 'John Doe', phone_no: 1234567890, driving_licence: 'DL123456' },
      { name: 'Jane Smith', phone_no: 2345678901, driving_licence: 'DL234567' },
      { name: 'Alice Johnson', phone_no: 3456789012, driving_licence: 'DL345678' },
    ],
  });

  const metaVehicles = await prisma.meta_vechile_data.createMany({
    data: [
      {
        primary_vehicle_type: 'CAR',
        secondary_vehicle_type: 'HATCHBACK',
        wheeler_type: 'FOUR',
        is_active: true,
      },
      {
        primary_vehicle_type: 'CAR',
        secondary_vehicle_type: 'CRUISER',
        wheeler_type: 'FOUR',
        is_active: true,
      },
      {
        primary_vehicle_type: 'BIKE',
        secondary_vehicle_type: 'SPORTS',
        wheeler_type: 'TWO',
        is_active: true,
      },
    ],
  });

  const vehicleRecords = await prisma.vechile_record.createMany({
    data: [
      {
        vechile_record_id: 1,
        name: 'Toyota Corolla',
        condition: 'EXCELLENT',
        total_km: '10000',
        fuil_type: 'PETROL',
        vechile_owner_id: 1,
        vechile_availability_status: true,
        vechile_registration_number: 'ABC1234',
        meta_vechile_id: 1,
      },
      {
        vechile_record_id: 2,
        name: 'Honda Civic',
        condition: 'FAIR',
        total_km: '20000',
        fuil_type: 'DIESEL',
        vechile_owner_id: 2,
        vechile_availability_status: true,
        vechile_registration_number: 'DEF5678',
        meta_vechile_id: 2,
      },
      {
        vechile_record_id: 3,
        name: 'Harley Davidson',
        condition: 'EXCELLENT',
        total_km: '5000',
        fuil_type: 'PETROL',
        vechile_owner_id: 3,
        vechile_availability_status: true,
        vechile_registration_number: 'GHI9012',
        meta_vechile_id: 3,
      },
    ],
  });

  const bookingRecords = await prisma.booking_record.createMany({
    data: [
      {
        vechile_record_id: 1,
        first_name: 'Alice',
        last_name: 'Wonderland',
        start_time: new Date('2024-07-01T08:00:00Z'),
        end_time: new Date('2024-07-07T08:00:00Z'),
      },
      {
        vechile_record_id: 2,
        first_name: 'Bob',
        last_name: 'Builder',
        start_time: new Date('2024-07-02T08:00:00Z'),
        end_time: new Date('2024-07-08T08:00:00Z'),
      },
      {
        vechile_record_id: 3,
        first_name: 'Charlie',
        last_name: 'Chaplin',
        start_time: new Date('2024-07-03T08:00:00Z'),
        end_time: new Date('2024-07-09T08:00:00Z'),
      },
    ],
  });

  const vehicleDocuments = await prisma.vehicle_document.createMany({
    data: [
      {
        documents_url: 'http://example.com/insurance1.pdf',
        document_type: 'INSURANCE',
        vehicle_record_id: 1,
      },
      {
        documents_url: 'http://example.com/registration1.pdf',
        document_type: 'REGISTRATION',
        vehicle_record_id: 1,
      },
      {
        documents_url: 'http://example.com/service1.pdf',
        document_type: 'SERVICE',
        vehicle_record_id: 1,
      },
      {
        documents_url: 'http://example.com/insurance2.pdf',
        document_type: 'INSURANCE',
        vehicle_record_id: 2,
      },
      {
        documents_url: 'http://example.com/registration2.pdf',
        document_type: 'REGISTRATION',
        vehicle_record_id: 2,
      },
      {
        documents_url: 'http://example.com/service2.pdf',
        document_type: 'SERVICE',
        vehicle_record_id: 2,
      },
    ],
  });

  console.log('Seed data created successfully.');
*/

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export default prisma