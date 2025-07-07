'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { StatusBadge, TableCell } from '@/components/atoms';
import { Loader, TableRow } from '@/components/molecules';
import { useCharacters } from '@/hooks';

const CharacterTable = () => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search') || null;
  const observerRef = useRef<HTMLTableRowElement | null>(null);

  const { characters, error, loading, nextPage, fetchMore } = useCharacters({
    page: 1,
    ...(searchValue && { name: searchValue }),
  });

  const handleLoadMore = useCallback(() => {
    if (loading || !nextPage) return;

    fetchMore({
      variables: {
        page: nextPage,
        ...(searchValue && { name: searchValue }),
      },
    });
  }, [loading, nextPage, fetchMore, searchValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) handleLoadMore();
      },
      {
        rootMargin: '200px',
      }
    );

    const lastRow = observerRef.current;
    if (lastRow) observer.observe(lastRow);

    return () => {
      if (lastRow) observer.unobserve(lastRow);
    };
  }, [handleLoadMore]);

  return (
    <div className="relative" key={searchValue || 'all'}>
      <div className="w-screen-minus-16 relative h-[400px] overflow-auto rounded-lg border border-gray-300 lg:h-[600px] lg:w-full">
        <table className="relative w-[600px] table-auto text-left text-sm sm:w-full">
          <thead className="sticky top-0 z-10 bg-gray-100">
            <TableRow>
              <TableCell isHeader>Character</TableCell>
              <TableCell isHeader>Status</TableCell>
              <TableCell isHeader>Species</TableCell>
              <TableCell isHeader>Gender</TableCell>
              <TableCell isHeader>Location</TableCell>
            </TableRow>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {characters?.length === 0 && !loading && (
              <TableRow>
                <TableCell colSpan={4} className="col-span-4 text-center">
                  {searchValue
                    ? `No characters found matching ${searchValue}`
                    : 'No characters found'}
                </TableCell>
              </TableRow>
            )}
            {characters?.map((character, i) => {
              const isLastRow = i === characters.length - 1;

              if (!character) return null;

              return (
                <TableRow
                  key={character?.id}
                  isStriped
                  ref={isLastRow ? observerRef : null}
                >
                  <TableCell className="min-w-[200px]">
                    <div className="flex items-center gap-4">
                      {character.image && (
                        <Image
                          src={character.image}
                          alt={character.name || ''}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                      <span className="font-medium text-gray-900">
                        {character.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={character.status || 'unknown'} />
                  </TableCell>
                  <TableCell>{character?.species}</TableCell>
                  <TableCell>{character?.gender}</TableCell>
                  <TableCell>{character?.location?.name}</TableCell>
                </TableRow>
              );
            })}
            {!nextPage && !loading && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="col-span-4 w-full text-center"
                >
                  No more characters to load
                </TableCell>
              </TableRow>
            )}
          </tbody>
        </table>
      </div>
      {loading && (
        <div
          className={twMerge(
            'absolute flex w-full items-center justify-center',
            characters?.length > 0 &&
              'bottom-0 left-0 z-10 border border-gray-300 bg-gray-100 py-4',
            characters?.length === 0 && 'inset-0'
          )}
        >
          <Loader
            {...(characters?.length === 0
              ? {
                  message: 'Loading characters...',
                }
              : { message: 'Loading more characters...' })}
          />
        </div>
      )}
      {error && (
        <div
          className={twMerge(
            'absolute flex w-full items-center justify-center',
            characters?.length > 0 &&
              'bottom-0 left-0 z-10 border border-red-500 bg-gray-100 py-2 lg:py-4',
            characters?.length === 0 && 'inset-0'
          )}
        >
          <p className="text-center text-red-500">
            Error loading characters. Please try again.
          </p>
        </div>
      )}
    </div>
  );
};

export default CharacterTable;
