import '@testing-library/jest-dom';
import { configure as configureTestingLibrary } from '@testing-library/react';

configureTestingLibrary({ testIdAttribute: 'data-test-id' });