$env:TESTCAFE_BROWSER = 'chrome'
$env:TESTCAFE_CONCURRENCY = 1
$env:TESTCAFE_SKIP_JS_ERRORS = 'true'
$env:TESTCAFE_SKIP_UNCAUGHT_ERRORS = 'true'
$env:TESTCAFE_GENERIC_TIMEOUT = 1000000
$env:TESTCAFE_SELECTOR_TIMEOUT = 100000
$env:TESTCAFE_ASSERTION_TIMEOUT = 100000
$env:TESTCAFE_PAGE_LOAD_TIMEOUT = 100000
$env:TESTCAFE_RUN_SPEED = 1
$env:TESTCAFE_STOP_ON_1ST_FAIL = 'false'
$env:TESTCAFE_REPORTER = 'teamcity'

$env:BROWSERSTACK_USERNAME = 'sunilphilip1'
$env:BROWSERSTACK_ACCESS_KEY = 'f7z61zJf3svqKyGDaTMV'

$env:TESTCAFE_URL = 'https://www.bupa.com.au/optical'
$env:TESTCAFE_IGNORE_TAGS = '@ignore or @skip_prod'

#npm run test-all;
npm run testrun;
#npm run reports-teamcity;
npm run reports;