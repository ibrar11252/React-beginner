import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar} from './components/Navbar'
import {Introduction} from './components/Introduction'
import {Solutions} from './components/Solutions'
//import agile from './agile.svg';
import {Practices} from './components/Practices'
import {Innovation} from './components/Innovation'
import {Recommend} from './components/Recommend'
import {Events} from './components/Events'
import {Footer} from './components/Footer'
import {Jira} from './Products/Jira'
import {JiraAlign} from './Products/JiraAlign'
import {JiraCore} from './Products/JiraCore'
import {JiraServiceDesk} from './Products/JiraServiceDesk'
import {Opsgenie} from './Products/Opsgenie'
import {StatusPage} from './Products/StatusPage'
import {Confluence} from './Products/Confluence'


import {Trello} from './Products/Trello'
import {Bitbucket} from './Products/Bitbucket'
import {SourceTree} from './Products/SourceTree'
import {Bamboo} from './Products/Bamboo'
import {Access} from './Products/Access'
import {Crowd} from './Products/Crowd'
import {Startups} from './components/ForTeams/Startups'
import {Software} from './components/ForTeams/Software'
import {Operations} from './components/ForTeams/Operations'
import {Marketing} from './components/ForTeams/Marketing'
import {Legal} from './components/ForTeams/Legal'
import {IT} from './components/ForTeams/IT'
import {Incident} from './components/ForTeams/Incident'
import {HR} from './components/ForTeams/HR'
import {Finance} from './components/ForTeams/Finance'
import {EnterPrise} from './components/ForTeams/EnterPrise'
import {Business} from './components/ForTeams/Business'









import './App.css'


function App() {
  return (
    <div className="App">
    app
    <Router>


      <Switch>

<Route exact path='/' >

    <Navbar />
    <Introduction />
    <Solutions />

    <Practices />
    <Innovation />
    <Recommend />
    <Events />
    <Footer />

</Route>


    <Route exact path='/jira'>
<Jira />

    </Route>

<Route exact path='/jiraalign'>
<JiraAlign />

</Route>

<Route exact path='/jiraCore'>
<JiraCore />

</Route>


<Route exact path='/jiraservicedesk'>
<JiraServiceDesk />

</Route>


<Route exact path='/opsgenie'>
<Opsgenie />

</Route>


<Route exact path='/statuspage'>
<StatusPage />

</Route>

<Route exact path='/confluence'>

<Confluence />

</Route>
<Route exact path='/trello'>

<Trello />

</Route>
<Route exact path='/bitbucket'>

<Bitbucket />

</Route>
<Route exact path='/sourcetree'>

<SourceTree />

</Route>
<Route exact path='/bamboo'>

<Bamboo />

</Route>


<Route exact path='/access'>

<Access />

</Route>


<Route exact path='/crowd'>

<Crowd />

</Route>



<Route exact path='/startups'>

< Startups />

</Route>


<Route exact path='/business'>

< Business />

</Route>


<Route exact path='/enterprise'>

< EnterPrise />

</Route>

<Route exact path='/software'>

< Software />

</Route>

<Route exact path='/marketing'>

< Marketing />

</Route>


<Route exact path='/hr'>

< HR />

</Route>


<Route exact path='/legal'>

< Legal />

</Route>

<Route exact path='/operations'>

< Operations />

</Route>

<Route exact path='/It'>

< IT />

</Route>

<Route exact path='/finance'>

< Finance />

</Route>


<Route exact path='/incident'>

< Incident />

</Route>


</Switch>

</Router>











    </div>
  );
}

export default App;
