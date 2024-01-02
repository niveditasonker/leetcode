
let state = null;
let isFetched = false;


// returns the state of *all* features for current user
function fetchAllFeatures() {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise(resolve => {
      console.log('In fetch');
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
      "feature-dialog": 10
    };

    setTimeout(resolve, 100, sampleFeatures);
  });
}

const getFeatureState = async(flagName, defaultVal = {}) => {
    try {
        console.log(state);

        if (state && flagName in state){
            console.log('Returning from state', flagName);
            return state[flagName];
        } else {

            if (!isFetched){
                const allFeatures = await fetchAllFeatures();
                state = allFeatures;
                isFetched = true;
                console.log(state);
            }

            if (flagName in state){
                return state[flagName];
            }else {
                return defaultVal;
            }
    }
         
    } catch (err){
        // throw new Error(err);
        console.log('Error: ', err);
        return defaultVal;
    }
}

const showExtendedSummary = () => {
    console.log('In showExtendedSummary');
}

const showBriefSummary = () => {
    console.log('In showBriefSummary');
}

const makeFeedbackButtonVisible = () => {
    console.log('In makeFeedbackButtonVisible');
}


// src/feature-x/summary.js
getFeatureState("extended-summary")
  .then(function(isEnabled) {
    if (isEnabled) {
      showExtendedSummary();
    } else {
      showBriefSummary();
    }
  });

// src/feature-y/feedback-dialog.js
getFeatureState("feedback-dialog")
  .then(function(isEnabled) {
    if (isEnabled) {
      makeFeedbackButtonVisible();
    }
  });
  
getFeatureState("feature-dialog")
  .then(function(isEnabled) {
    if (!!isEnabled) {
      console.log('Reached here');
    // make some fn call
    }
});

getFeatureState("feat-dialog")
  .then(function(isEnabled) {
      console.log(isEnabled);
    getFeatureState("extended-summary")
    .then(function(isEnabled) {
        if (isEnabled) {
        showExtendedSummary();
        } else {
        showBriefSummary();
        }
    });
    }
);

