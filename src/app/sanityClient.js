import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'dor7gnw8', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'skWjuLkO5GXWu3PVDHw6Z21v973OZV0EpTAik0UsPZwx7e91H1NqPHH5oNz4o22n9ACq2z2NHJFjKCvy3yLr2kc4eCb5wYVtteiUVzfr3bXSF4qIDhwJ6oSSp4T50IWZGDzQHHTZFXEhLqhT1v955WyH2TES6afhEuZInvhOpUg6oGqdIavR', // Replace with your Sanity API token
});


export default client;
