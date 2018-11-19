## [Unreleased]

## [3.0.1] - 2018-11-19

### Changed
- Fix usage of styled-components' `css` in Dialog component.

## [3.0.0] - 2018-11-19

### Changed
- `label` prop in the Dropdown component can now be a node (previously string only).
- Dropdown is one-line only now.
- Rename `props` to `p` in styled components.
- Fix Animations export.
- ToggleMenu (so also OverflowMenu and Dropdown) support for click outside and out-of-bounds in controlled behaviour.
- ToggleMenu (so also OverflowMenu and Dropdown) support for bi-dimensional out-of-bounds handling.

### Added
- Typography description in the styleguide.
- Unify theme dictionaries (export values, not styles).
- Container component (in layout section).
- Grid component (in layout section).

### Breaking changes
- Dropdown and OverflowMenu components now require a `persist` prop to be set to avoid closing dropdown panel after a click inside.
- New colour names.
- ToggleMenu (so also OverflowMenu and Dropdown) now have `preventOutOfBounds=true` by default.

## [2.0.0] - 2018-10-24

### Added
- Exported Theme object.
- Sizes in theme and styleguide.
- Describe Grid Layout.
- Exported Normalize style.
- Exportable `styled-components`-based animation.
- Invalid state on an `Input` component.
- `Input` component snapshots.

### Changed
- Refactor `Button` component.
- Change base color on `Input` component.

### Breaking changes
- Rename colors.
- Unify prop names (`something` instead of `isSomething`).
- Pass not used props to the underlying component (potential use cases: data-attributes, form elements' attributes, additional styling).

## [1.1.0] - 2018-10-09

### Added

- Input component
- Accordion component

### Changed
- Add `IS_STYLEGUIDE` flag to work around some issues when static components' stories broke styleguide.

## [1.0.0] - 2018-10-04
### Added
- Checkbox component

### Changed
- Get rid of `react-modal2` dependency.
- Use `yarn`.
- Add `isFluid` prop to `Dropdown` and `ToggleMenu` components.

### Breaking changes
- Split Modal component to Modal and Dialog components.
- Add `min-width` and `text-align` for Dropdown's button.
- Dropdown component to call `onOpen` and `onClose` even in controlled state.

## [0.8.2] - 2018-09-27
### Changed
- Fix classnames in Modal component

## [0.8.1] - 2018-09-22
### Changed
- Allow ColorSelector component to set the background using the given string.
- Color selector component to support empty state.

### Fixed
- Dropdown icon not reacting when `isOpen` is `true`.

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
