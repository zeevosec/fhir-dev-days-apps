import FHIR from 'fhirclient'

const client = new FHIR().client({ serverUrl: "https://r4.smarthealthit.org" })

const PATIENT_ID = '494743a2-fea5-4827-8f02-c2b91e4a4c9e'

// Read 1: Read a patient
client.request(`Patient/${PATIENT_ID}`)
  .then(r => console.dir(r))

// Read 2: Patient summary
client.request(`Patient/${PATIENT_ID}?_summary=true`)
  .then(r => console.dir(r))

// Read 3: Patient name only
client.request(`Patient/${PATIENT_ID}?_elements=name`)
  .then(r => console.dir(r))
