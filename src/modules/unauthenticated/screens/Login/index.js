import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'

export const LoginScreen = () => {
  return (
        <Flex flexDir='row' w='100vw' h='100vh'>
            <Flex
                alignItems={['center', 'flex-start']}
                justifyContent='center'
                paddingLeft={['0px', '0px', '0px', '112px']}
                padding={['24px', '48px', '80px', '0px']}
                flexDir='column'
                w={['100%', '100%', '100%', '40%']}
                h='100%'>
                    <Flex flexDir='column' w={['100%', '100%', '100%', '416px']} >
                        <Image src='/img/logo.svg' alt='BookClub Logo'w='160px' h='48px'/>
                        <Text.ScreenTitle mt='48px'>Login</Text.ScreenTitle>
                        <Input mt='24px' placeholder='email@exemplo.com'/>
                        <Input.Password mt='24px' placeholder='*******************'/>
                        <Flex mt='8px' w='100%' alignItems='flex-end' justifyContent='flex-end'>
                        <Link>Esqueceu sua senha ?</Link>
                        </Flex>
                        <Button mt='24px'>Entrar</Button>
                        <Link.Action mt='28px' text='Não possui uma conta?' actionText='Cadastre-se aqui.'></Link.Action>
                    </Flex>
            </Flex>
            <Flex
                w={['0%', '0%', '0%', '60%']}
                h='100%'
                backgroundImage="url('/img/auth_background.svg')"
                backgroundSize="cover"
                backgroundPosition='center'
                backgroundRepeat="no-repeat"
                borderTopLeftRadius='32px'
                borderBottomLeftRadius='32px'
            />
        </Flex>
  )
}
