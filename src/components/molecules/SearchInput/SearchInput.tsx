import { LucideSearch, LucideX } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { IconButton, Input } from '@/components/atoms';
import { debounce } from '@/utils';

type SearchInputProps = {
  inputClassName?: string;
  wrapperClassName?: string;
};

const SearchInput = ({
  inputClassName,
  wrapperClassName,
}: SearchInputProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchValue = searchParams.get('search') || '';
  const [showClearButton, setShowClearButton] = useState(searchValue !== '');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (!searchValue) {
      handleClear();
      return;
    }

    params.set('search', searchValue);
    router.replace(`${pathname}?${params.toString()}`);
  }, 200);

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('search');
    router.replace(`${pathname}?${params.toString()}`);

    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  return (
    <div className={twMerge('relative w-full', wrapperClassName)}>
      <LucideSearch
        className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400"
        data-testid="search-icon"
      />
      <Input
        ref={searchInputRef}
        data-testid="search-input"
        type="text"
        className={twMerge('w-full pl-9', inputClassName)}
        defaultValue={searchValue}
        placeholder="Search characters by name"
        onChange={(e) => {
          setShowClearButton(e.target.value !== '');
          handleSearch(e);
        }}
      />
      {showClearButton && (
        <IconButton
          className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400"
          data-testid="clear-button"
          icon={<LucideX />}
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default SearchInput;
