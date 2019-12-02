/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
  {
      date: "07/24/2025",
      concept: "HTML & CSS",
      entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Ok"
  },
  {
    date: "11/15/2019",
    concept: "we mostly worked on our own",
    entry: "We mostly had lab time and stuff",
    mood: "Okie dokie"
    },
    
    {
    date: "11/14/2019",
    concept: "Planning",
    entry: "We talked about how to plan out projects before starting and did some more html and css",
    mood: "tired"
    }


]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}

