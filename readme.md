#### Running Locally
`npm install`
`npm test`


#### Running on Docker
`docker build . -t axios-mocha-example`

`docker run -d axios-mocha-example`

#### Sending result to Test Rail
If you want to send results to test rail, update the mocha-tesrail.opts file adding a a username nad password.
Add the correct project ID and Suite ID to mocha-testrail.opts 
Add the relevant Test Rail testcase id to the test

example:  it('C1234 should return status 200', function(done)

To run the test and submit the results:
`npm run test:testrail-results`