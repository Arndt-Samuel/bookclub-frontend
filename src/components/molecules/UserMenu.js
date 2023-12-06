import { Text, MenuItem } from 'components/atoms'
import { Avatar, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
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

  const menuOptions = [
    {
      id: 0,
      icon: CiBookmark,
      text: 'Favoritos',
      divider: false
    },
    {
      id: 1,
      icon: IoPersonOutline,
      text: 'Dados pessoais',
      divider: false
    },
    {
      id: 2,
      icon: GoShieldCheck,
      text: 'Alterar senha',
      divider: true
    },
    {
      id: 3,
      icon: IoDocumentTextOutline,
      text: 'Termos de uso',
      divider: false
    },
    {
      id: 4,
      icon: IoClipboardOutline,
      text: 'Política de privacidade',
      divider: true
    },
    {
      id: 5,
      icon: IoLogOutOutline,
      text: 'Logout',
      divider: false
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
          <MenuItem key={`menu_item_${item.id}`} {...item} />
        ))}
      </MenuList>
    </Menu>
  )
}
