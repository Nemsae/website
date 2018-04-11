
/**
 * Root saga manages watcher lifecycle
 */
export default function* sensorsData() {
  // Watches for GET_RECOMMENDATIONS actions and calls loadRecommendations when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount

  // yield takeLatest(GET_RECOMMENDATIONS, loadRecommendations);
  // yield takeLatest(GET_FEATURES, loadFeatures);
  // yield takeLatest(RATE_RECOMMENDATION, rateRecommendation);
}
