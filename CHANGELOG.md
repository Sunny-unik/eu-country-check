# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.2.2] - 2024-01-12

### Changed

- Updated the homepage property in package.json, it also updated the documentation link in npmjs.com.
- Added CHANGELOG.md file that contains all release information about older changes.

## [1.2.1] - 2023-09-02

### Changed

- Decrease package size by removing unwanted files from registry.

## [1.2.0] - 2023-08-31 [**breaking-changes**]

### Removed

- Remove `listEuCodes` function

### Added

- Add `isEEACountry` function

### Changed

- Update README.md according changes in functionality
- Rename `isEuCountry` function to `isEUCountry`
- Update parameter validations of `isEUCountry` function now it is works with country-name, alpha-2, alpha-3 and numeric-country-code (All of these parameter type must be string)

## [1.0.4] - 2023-08-30

### Fixed

- Update type declaration

## [1.0.2] - 2023-08-29

### Fixed

- Update Eu-countries list

## [1.0.0] - 2022-08-14

### Added

- First publish on npmjs
- Add two functions `listEuCodes`, `isEuCountry`
