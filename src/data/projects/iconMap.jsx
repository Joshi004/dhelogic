import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LanguageIcon from '@mui/icons-material/Language';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LoopIcon from '@mui/icons-material/Loop';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessIcon from '@mui/icons-material/Business';
import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import ScienceIcon from '@mui/icons-material/Science';

export const iconMap = {
  PlayCircleOutline: PlayCircleOutlineIcon,
  TrendingUp: TrendingUpIcon,
  PrivacyTip: PrivacyTipIcon,
  AutoAwesome: AutoAwesomeIcon,
  Search: SearchIcon,
  Security: SecurityIcon,
  Analytics: AnalyticsIcon,
  ShowChart: ShowChartIcon,
  Speed: SpeedIcon,
  CloudSync: CloudSyncIcon,
  IntegrationInstructions: IntegrationInstructionsIcon,
  Language: LanguageIcon,
  PersonSearch: PersonSearchIcon,
  Loop: LoopIcon,
  Gavel: GavelIcon,
  Business: BusinessIcon,
  Lock: LockIcon,
  Star: StarIcon,
  WorkOutline: WorkOutlineIcon,
  Description: DescriptionIcon,
  AccountTree: AccountTreeIcon,
  Psychology: PsychologyIcon,
  SyncAlt: SyncAltIcon,
  Timeline: TimelineIcon,
  AccessTime: AccessTimeIcon,
  Shield: ShieldIcon,
  Science: ScienceIcon,
};

/**
 * Get a Material-UI icon component by its string key
 * @param {string} key - The icon key from iconMap
 * @param {object} props - Props to pass to the icon component
 * @returns {JSX.Element|null} The icon component or null if not found
 */
export const getIcon = (key, props = {}) => {
  const Icon = iconMap[key];
  return Icon ? <Icon {...props} /> : null;
};

