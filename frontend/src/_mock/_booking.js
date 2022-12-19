import _mock from './_mock';
import { randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _bookings = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  avatar: _mock.image.avatar(index),
  checkIn: _mock.time(index),
  checkOut: _mock.time(index),
  phoneNumber: _mock.phoneNumber(index),
  status: randomInArray(['pending', 'un_paid', 'paid']),
  roomType: randomInArray(['double', 'king', 'single']),
}));

export const _bookingsOverview = [...Array(3)].map((_, index) => ({
  status: ['Pending', 'Cancel', 'Done'][index],
  quantity: _mock.number.percent(index) * 1000,
  value: _mock.number.percent(index),
}));

export const _bookingReview = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  description: _mock.text.description(index),
  avatar: _mock.image.avatar(index),
  rating: _mock.number.rating(index),
  postedAt: _mock.time(index),
  tags: ['Great Sevice', 'Recommended', 'Best Price'],
}));

export const _bookingNew = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  avatar: _mock.image.avatar(index),
  bookdAt: _mock.time(index),
  roomNumber: 'A-21',
  roomType: randomInArray(['double', 'king', 'single']),
  person: '3-5',
  cover: `https://minimal-assets-api-dev.vercel.app/assets/images/rooms/room-${index + 1}.jpg`,
}));
