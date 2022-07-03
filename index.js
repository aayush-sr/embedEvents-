import {
  init,
  LiveboardEmbed,
  Action,
  RuntimeFilterOp,
  EmbedEvent,
  AuthType,
  logout,
  HostEvent,
} from '@thoughtspot/visual-embed-sdk';

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ 'http://localhost:3000/' /*param-end-hosturl*/,
  authType: AuthType.None,
  username: 'tsadmin',
});

// Instantiate class for embedding a Liveboard
const embed = new LiveboardEmbed('#embed', {
  frameParams: { height: '100vh' },
  // disabledActions: [Action.ShowUnderlyingData],
  liveboardId:
    '33248a57-cc70-4e39-9199-fb5092283381' /*param-end-runtimeFilters*/,
  // vizId: "1e99d70f-c1dc-4a52-9980-cfd4d14ba6d6",
})
  .on(
    EmbedEvent.ALL,
    (payload) => {
      console.log(payload);
    },
    { start: true }
  )
  .on(EmbedEvent.ALL, (payload) => {
    console.log(payload);
  })
  .render();

// document.getElementById('button1').addEventListener('click', () => {
//   embed.trigger('pin', {vizId: '730496d6-6903-4601-937e-2c691821af3c'});
// });
