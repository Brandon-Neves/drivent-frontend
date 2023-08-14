import useAsync from '../useAsync';
import * as activitiesApi from '../../services/activitiesApi';
import useToken from '../useToken';
export function useActivitiesDate() {
  const token = useToken();

  const {
    data: activitiesDate,
    loading: activitiesDateLoading,
    error: activitiesDateError,
    act: getActivitiesDate,
  } = useAsync(() => activitiesApi.getDateActivites(token), false);

  return {
    activitiesDate,
    activitiesDateLoading,
    activitiesDateError,
    getActivitiesDate,
  };
}
