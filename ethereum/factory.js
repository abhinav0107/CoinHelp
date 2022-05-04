import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xECa9047a9D0dC4A15AB5AF2B1c75e58448229457'
);

export default instance;
