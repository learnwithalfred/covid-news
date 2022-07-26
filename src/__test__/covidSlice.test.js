import {
  getCovidStatus,
  getCovidError,
  getPageTitle,
  getSearchResults,
  selectAllCovidData,
} from '../features/covid/covidSlice';

describe('Covid data fetching', () => {
  it('Status should be iddle on initial status', () => {
    const state = {
      covid: {
        covid: [],
        status: 'idle',
        error: null,
        covidDetail: [],
        searchResults: [],
        pageTitle: '',
      },
    };
    expect(getCovidStatus(state)).toBe('idle');
  });

  it('All data', () => {
    const state = {
      covid: {
        covid: [],
        status: 'idle',
        error: null,
        covidDetail: [],
        searchResults: [],
        pageTitle: '',
      },
    };
    expect(selectAllCovidData(state)).toEqual([]);
  });

  it('Page title should be empty', () => {
    const state = {
      covid: {
        covid: [],
        status: 'idle',
        error: null,
        covidDetail: [],
        searchResults: [],
        pageTitle: '',
      },
    };
    expect(getPageTitle(state)).toBe('');
  });

  it('Searrch results should be empty', () => {
    const state = {
      covid: {
        covid: [],
        status: 'idle',
        error: null,
        covidDetail: [],
        searchResults: [],
        pageTitle: '',
      },
    };
    expect(getSearchResults(state)).toEqual([]);
  });

  it('Errors should be null', () => {
    const state = {
      covid: {
        covid: [],
        status: 'idle',
        error: null,
        covidDetail: [],
        searchResults: [],
        pageTitle: '',
      },
    };
    expect(getCovidError(state)).toBeNull();
  });
});
