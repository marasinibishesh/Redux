import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs.js'
export default function () {
    return configureStore({reducer});
}