import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ChakraProvider, Flex, Box, ScaleFade } from '@chakra-ui/react'
import BiBurn from './themes/BiBurn'
import { UseWalletProvider } from 'use-wallet'
import defaults from './common/defaults'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ActionPanel } from './components/ActionPanel'
import { Overview } from './components/Overview'

const App = () => {

	return (
		<Router>
			<ChakraProvider theme={BiBurn}>
				<UseWalletProvider
					chainId={defaults.network.chainId}
					connectors={defaults.network.connectors}>
					<Flex
						height='100vh'
						pb={{ base: '76px', sm: '0' }}
						flexDir='column'>
						<Header width='100%'
						      p='1.2rem 1rem'
							    justifyContent='center'/>
						<Box h='calc(100vh-2.4rem)'
						  justifyContent='center'
						  mx={{ base: '0.5rem', sm: '1rem', md: '2.5rem', lg: '13rem' }}
						  p={3}>
							<Switch>
								<Route path='/' exact render={() =>
									<ScaleFade
										initialScale={0.95}
										in={true}
										unmountOnExit>
										<Box maxW={defaults.layout.width} m='0 auto'>
											<Overview flexFlow='row wrap' mb={{ base: '0', sm: '19px' }}/>
										</Box>
									</ScaleFade>
								}/>
								<Route path='*' render={() =>
									<Redirect to={'/'} />
								} />
							</Switch>
							<ActionPanel />
							<Footer/>
						</Box>
					</Flex>
      	</UseWalletProvider>
			</ChakraProvider>
		</Router>
	)
}

export default App
