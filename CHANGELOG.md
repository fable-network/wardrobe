## [Unreleased]
### Changed
- Allow ColorSelector component to set the background using the given string.
- Color selector component to support empty state.

## [0.8.0] - 2018-09-21
### Changed
- Dropdown component now allows `isOpen` prop to have it controlled.
- Renamed `disabled` prop to `isDisabled`.

## [0.7.0] - 2018-09-18
### Added
- Loading state to the dropdown component.
- preventOutOfBounds prop for the dropdown component.

### Changed
- The path of the iconSprite in Icon component to be absolute.

### Fixed
- JS error when the toggleMenu component is unmounted while the menu is open.

## [0.6.0] - 2018-09-13
### Added
- Modal component

### Changed
- ToggleMenu component now uses display instead of visibility.
- Dropdown component now allows onClose prop to be passed.
- Dropdown component layout now uses flex to align the icon to the right.

### Fixed
- value prop not being passed to the searchbar input field.

## [0.5.1] - 2018-09-05
### Fixed
- Fix bug causing searchbar placeholder not to show.

## [0.5.0] - 2018-09-05
### Added
- Searchbar component
- Loading spinner component
- Table component
- Overflow menu component
- ToggleMenu component

### Changed
- Refactor Dropdown component to use ToggleMenu

## [0.4.0] - 2018-08-22
### Changed
- Moved react, react-dom and styled-components to peerDependencies

## [0.3.0] - 2018-08-21
### Added
- Dropdown component
- Component generation script.

### Changed
- generateTests script to account from other component imports within the main component.

## [0.2.0] - 2018-08-6
### Added
- ColorSelector component.
- Snapshots tests and test generation.

## [0.1.0] - 2018-07-31
### Added
- Button component
- Badge component
