import videoAiData from './video-ai.json';
import atsData from './ats.json';
import privacyPlatformData from './privacy-platform.json';
import contractDigitizationData from './contract-digitization.json';
import tickerStreamSystemData from './ticker-stream-system.json';

/**
 * All projects data from JSON files
 */
const allProjects = [
  videoAiData,
  atsData,
  privacyPlatformData,
  contractDigitizationData,
  tickerStreamSystemData,
];

/**
 * Get all projects
 * @returns {Array} All projects
 */
export const getAllProjects = () => allProjects;

/**
 * Get projects that should be displayed on the portfolio page
 * @returns {Array} Projects filtered for portfolio display
 */
export const getPortfolioProjects = () => 
  allProjects.filter(p => p.visibility.showOnPortfolio);

/**
 * Get projects that should be displayed on the homepage
 * @returns {Array} Projects filtered for homepage display
 */
export const getHomepageProjects = () => 
  allProjects.filter(p => p.visibility.showOnHomepage);

/**
 * Get a specific project by ID
 * @param {string} id - The project ID
 * @returns {Object|null} The project or null if not found
 */
export const getProjectById = (id) => 
  allProjects.find(p => p.id === id) || null;

/**
 * Get ongoing projects
 * @returns {Array} Projects that are currently in development
 */
export const getOngoingProjects = () => 
  allProjects.filter(p => p.status.isOngoing);

/**
 * Get completed projects
 * @returns {Array} Projects that are completed
 */
export const getCompletedProjects = () => 
  allProjects.filter(p => !p.status.isOngoing);

export default allProjects;

