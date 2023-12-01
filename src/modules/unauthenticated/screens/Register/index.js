import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RegisterScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Nome deve conter ao menos 3 caracteres.').required('Nome é obrigatório.'),
      email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório.'),
      password: Yup.string().min(6, 'Senha deve ter ao menos 6 caracteres').required('Senha é obrigatório.'),
      confirmPassword: Yup.string().min(6, 'confirmar a senha deve ter ao menos 6 caracteres').required('confirmar a senha é obrigatório.').oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
    }),
    onSubmit: (data) => {
      navigate('/reset-password')
    }
  })
  return (
        <Flex flexDir='row' w='100vw' h='100vh'>
            <Flex
                alignItems={['center', 'flex-start']}
                justifyContent='center'
                padding={['24px', '48px', '80px', '112px']}
                flexDir='column'
                w={['100%', '100%', '100%', '40%']}
                h='100%'>
                    <Flex flexDir='column' w={['100%', '100%', '100%', '416px']} >
                        <Image src='/img/logo.svg' alt='BookClub Logo'w='160px' h='48px'/>
                        <Text.ScreenTitle mt='48px'>Cadastro</Text.ScreenTitle>
                        <Input type='text' id='name' name='name' value={values.name} onChange={handleChange} error={errors.name} mt='24px' placeholder='Nome completo' />
                        <Input type='email' id='email' name='email' value={values.email} mt='16px' placeholder='E-mail' onChange={handleChange} error={errors.email}/>
                        <Input.Password id='password' name='password' value={values.password} onChange={handleChange} error={errors.password} mt='16px' placeholder='Senha' />
                        <Input.Password id='confirmPassword' name='confirmPassword' value={values.confirmPassword} onChange={handleChange} error={errors.confirmPassword} mt='16px' placeholder='Confirmar senha' />
                        <Button onClick={handleSubmit} mb='12px' mt='24px'>Cadastrar</Button>
                        <Link.Action onClick={() => navigate('/')} mt='8px' text='Já possui uma conta?' actionText='Faça login aqui.'></Link.Action>
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
