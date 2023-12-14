import { CollectionConfig } from "payload/types";

const Customers: CollectionConfig = {
    slug: 'customers',
    access : {
      read : () => true,
      update : () => true,
      delete : () => true,
      create : () => true
    },
    admin: {
      useAsTitle: 'name',
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Name',
        required: true
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email Address',
        required: true
      },
      {
        name: 'school',
        type: 'text',
        label: 'School',
        required: true
      },
      {
        name: 'date',
        type: 'date',
        label: 'Submit Date',
        admin: {
            date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'd MMM yyy',
            },
          },
          required: true
      },
      {
        name: 'status',
        type: 'select',
        label: 'Status',
        options: [
            {
                label: 'Waiting',
                value: 'Waiting'
            },
            {
                label: 'Accepted',
                value: 'Accepted'
            },
            {
                label: 'Rejected',
                value: 'Rejected'
            }
        ],
        defaultValue: 'Waiting'
      }
    ],
  }
  
  export default Customers