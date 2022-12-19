// hooks
import { useSelector } from 'react-redux'
// utils
import createAvatar from '../utils/createAvatar'
//
import Avatar from './Avatar'

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  // get user
  const { user } = useSelector((state) => state?.user)

  return (
    <Avatar src={user?.avatar} alt={user?.name} color={user?.avatar ? 'default' : createAvatar(user?.name).color} {...other}>
      {createAvatar(user?.name).name}
    </Avatar>
  )
}
