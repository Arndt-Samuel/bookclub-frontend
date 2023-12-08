import { Text, MenuItem } from 'components/atoms'
import { Avatar, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { CiBookmark } from 'react-icons/ci'
import {
  IoPersonOutline,
  IoDocumentTextOutline,
  IoClipboardOutline,
  IoLogOutOutline
} from 'react-icons/io5'
import { GoShieldCheck } from 'react-icons/go'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)

  const navigate = useNavigate()

  const menuOptions = [
    {
      id: 0,
      icon: CiBookmark,
      text: 'Favoritos',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 1,
      icon: IoPersonOutline,
      text: 'Dados pessoais',
      divider: false,
      onClick: () => navigate('/')
    },
    {
      id: 2,
      icon: GoShieldCheck,
      text: 'Alterar senha',
      divider: true,
      onClick: () => navigate('/')
    },
    {
      id: 3,
      icon: IoDocumentTextOutline,
      text: 'Termos de uso',
      divider: false,
      onClick: () => navigate('/')
    },
    {
      id: 4,
      icon: IoClipboardOutline,
      text: 'Política de privacidade',
      divider: true,
      onClick: () => navigate('/')
    },
    {
      id: 5,
      icon: IoLogOutOutline,
      text: 'Logout',
      divider: false,
      onClick: () => navigate('/')
    }
  ]

  return (
    <Menu>
      <MenuButton>
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Avatar
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            w={['36px', '48px']}
            h={['36px', '48px']}
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLight"
            mr={['6px', '12px']}
          />
          <Flex display={['none', 'flex']}>
            <Text fontWeight="bold" maxLength="40px">
              {userStore?.user?.name}
            </Text>
          </Flex>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOptions.map((item) => (
          <MenuItem
            onClick={() => item.onClick()}
            key={`menu_item_${item.id}`}
            {...item}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
