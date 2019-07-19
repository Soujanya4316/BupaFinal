$env:TESTCAFE_BROWSER = 'chrome:headless'
$env:TESTCAFE_CONCURRENCY = 1
$env:TESTCAFE_SKIP_JS_ERRORS = 'true'
$env:TESTCAFE_SKIP_UNCAUGHT_ERRORS = 'true'
$env:TESTCAFE_GENERIC_TIMEOUT = 50000
$env:TESTCAFE_SELECTOR_TIMEOUT = 50000
$env:TESTCAFE_ASSERTION_TIMEOUT = 10000
$env:TESTCAFE_PAGE_LOAD_TIMEOUT = 150000
$env:TESTCAFE_RUN_SPEED = 1
$env:TESTCAFE_STOP_ON_1ST_FAIL = 'false'
$env:TESTCAFE_REPORTER = 'teamcity'

$env:TESTCAFE_URL = 'https://mainsite-ci.tmca-digital.com.au'
$env:TESTCAFE_IGNORE_TAGS = '@ignore or @skip_prod'

npm run test-all;
npm run reports;
