import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import Menubar from '@/components/homeComponent/Menubar';
import QueryListDropDown from '@/components/homeComponent/QueryListDropDown';

import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Query Interface</title>
        <meta name="description" content="A virtuoso query interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Menubar/>
          <QueryListDropDown/>
          <TabContext>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex',justifyContent:'space-around'}}>
              <TabList aria-label="lab API tabs example" sx={{display:'flex'}}>
                <Tab label="Queryt Editor" value="1" sx={{marginX:'20px',color:'blue',fontWeight:'bold'}}/>
                <Tab label="Result" value="2" sx={{marginX:'20px',color:'blue',fontWeight:'bold'}}/>
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
      </main>
    </>
  )
}
