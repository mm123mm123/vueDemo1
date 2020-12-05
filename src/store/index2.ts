import labelListStore from '@/store/labelListStore';
import recordListStore from '@/store/recordListStore';

const store = {
  ...labelListStore,
  ...recordListStore
};

export default store;