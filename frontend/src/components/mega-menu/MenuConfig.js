// _mock_
import { _megaMenuProducts } from '../../_mock';
// components
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: '100%',
  height: '100%',
};

const TAGS = [
  { name: 'Paper Cup', path: '#' },
  { name: 'Lotion Pump', path: '#' },
  { name: 'Brush Cutter', path: '#' },
  { name: 'Display Rack', path: '#' },
  { name: 'Glass Bottle', path: '#' },
];

const menuConfig = [
  {
    title: 'Parent 1',
    path: '#',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: _megaMenuProducts,
    tags: TAGS,
    children: [
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking Machinery',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Parent 2',
    path: '#',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: _megaMenuProducts,
    tags: TAGS,
    children: [
      {
        subheader: 'Cellphone & Accessories',
        items: [
          { title: 'Mobile Phone Charger', path: '#' },
          { title: 'Power Bank', path: '#' },
          { title: 'Mobile Phone LCD', path: '#' },
          { title: 'Bluetooth Headset', path: '#' },
          { title: 'Mobile Phone', path: '#' },
        ],
      },
      {
        subheader: 'Audio & Video',
        items: [
          { title: 'Display & Accessories', path: '#' },
          { title: 'Audio & Sets', path: '#' },
          { title: 'Professional Audio', path: '#' },
          { title: 'LCD Display', path: '#' },
          { title: 'LCD Module', path: '#' },
          { title: 'Video', path: '#' },
          { title: 'TV & Parts', path: '#' },
          { title: 'Amplifier', path: '#' },
          { title: 'Portable Audio Appliance', path: '#' },
          { title: 'Home Theatre System', path: '#' },
          { title: 'HDMI Cable', path: '#' },
          { title: 'Radio', path: '#' },
        ],
      },
      {
        subheader: 'Household Appliances',
        items: [
          { title: 'Air Conditioner, Purifier & Humidifier', path: '#' },
          { title: 'Refrigerator, Freezer & Parts', path: '#' },
          { title: 'Water Heater & Components', path: '#' },
          { title: 'Electrical Fan & Exhaust Fan', path: '#' },
          { title: 'Household Water Treatment Equipment', path: '#' },
          { title: 'Solar Water Heater', path: '#' },
          { title: 'Photographic Apparatus', path: '#' },
          { title: 'Gas Burner & Gas Stove', path: '#' },
          { title: 'Entertainment Electronics', path: '#' },
          { title: 'Electrical Kettle', path: '#' },
          { title: 'Food Blender', path: '#' },
          { title: 'Dehumidifier', path: '#' },
        ],
      },
      {
        subheader: 'Digital Devices',
        items: [
          { title: 'Battery & Charger', path: '#' },
          { title: 'Wearable Devices', path: '#' },
          { title: 'Digital Photo Frame', path: '#' },
          { title: 'Digital Camera', path: '#' },
          { title: 'Smart Glasses', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Parent 3',
    path: '#',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
  },
  {
    title: 'Parent 4',
    path: '#',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
  },
];

export default menuConfig;
